package main

import (
	"database/sql"
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "Hung2006"
	dbname   = "allproducts"
)

type Product struct {
	Name        string  `json:"name"`
	Description string  `json:"desc"`
	Price       float64 `json:"price"`
	ImageURL    string  `json:"image"`
}

var products []Product
var newProduct Product

func main() {

	// connection string
	psqlconn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)

	// open database
	db, err := sql.Open("postgres", psqlconn)
	CheckError(err)
	// close database
	defer db.Close()

	// check db
	err = db.Ping()
	CheckError(err)

	fmt.Println("Connected!")

	r := gin.Default()

	r.Use(cors.Default()) // ✅ Cho phép frontend truy cập từ origin khác

	r.POST("/products", func(c *gin.Context) {
		if err := c.ShouldBindJSON(&newProduct); err != nil {
			c.JSON(400, gin.H{"error": "Invalid request data: " + err.Error()})
			return
		}
		/*
			// Validate data before inserting
			if len(newProduct.Name) > 128 {
				c.JSON(400, gin.H{"error": "Name is too long (max 128 characters)"})
				return
			}
			if len(newProduct.Description) > 500 {
				c.JSON(400, gin.H{"error": "Description is too long (max 500 characters)"})
				return
			}
			if len(newProduct.ImageURL) > 1000 {
				c.JSON(400, gin.H{"error": "Image URL is too long (max 1000 characters)"})
				return
			}

			// Price validation
			if newProduct.Price <= 0 {
				c.JSON(400, gin.H{"error": "Price must be greater than 0"})
				return
			}
			if newProduct.Price > 1000000 {
				c.JSON(400, gin.H{"error": "Price must be less than 1,000,000"})
				return
			}
			// Check for scientific notation
			if fmt.Sprintf("%e", newProduct.Price) != fmt.Sprintf("%f", newProduct.Price) {
				c.JSON(400, gin.H{"error": "Price cannot be in scientific notation"})
				return
			}
		*/
		// insert
		insertStmt := `insert into product (name, descrip, price, image)
		values ($1, $2, $3, $4)`
		_, err := db.Exec(insertStmt, newProduct.Name, newProduct.Description, newProduct.Price, newProduct.ImageURL)
		if err != nil {
			// Check for specific database errors
			if err.Error() == "pq: duplicate key value violates unique constraint" {
				c.JSON(400, gin.H{"error": "A product with this name already exists"})
			} else {
				c.JSON(500, gin.H{"error": "Database error: " + err.Error()})
			}
			return
		}

		c.JSON(201, gin.H{
			"message": "Product created successfully",
			"product": newProduct,
		})
	})

	// Route GET /products
	r.GET("/products", func(c *gin.Context) {
		// Query to get all products
		rows, err := db.Query("SELECT name,descrip, price, image FROM product")
		for rows.Next() {
			var p Product
			if err := rows.Scan(&p.Name, &p.Description, &p.Price, &p.ImageURL); err != nil {
				c.JSON(500, gin.H{"error": "Failed to scan product: " + err.Error()})
				return
			}
			c.JSON(200, p)
		}
		/*rows, err := db.Query("SELECT name, descrip, price, image FROM product")
		if err != nil {
			c.JSON(500, gin.H{"error": "Failed to fetch products: " + err.Error()})
			return
		}
		defer rows.Close()

		var products []Product
		for rows.Next() {
			var p Product
			if err := rows.Scan(&p.Name, &p.Description, &p.Price, &p.ImageURL); err != nil {
				c.JSON(500, gin.H{"error": "Failed to scan product: " + err.Error()})
				return
			}
			products = append(products, p)
		}*/

		if err = rows.Err(); err != nil {
			c.JSON(500, gin.H{"error": "Error iterating products: " + err.Error()})
			return
		}
		c.JSON(200, rows)
	})

	r.Run(":8080") // chạy server tại http://localhost:8080

}

func CheckError(err error) {
	if err != nil {
		panic(err)
	}
}
