package utils

import (
	"database/sql"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

type Product struct {
	ID          int     `json:"id"`
	Name        string  `json:"name"`
	Description string  `json:"desc"`
	Price       float64 `json:"price"`
	ImageURL    string  `json:"image"`
}

func HandleGetProducts(c *gin.Context, db *sql.DB) {
	// Query to get all products
	rows, err := db.Query("SELECT id, name, descrip, price, image FROM product")
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to fetch products: " + err.Error()})
		return
	}
	defer rows.Close()

	var products []Product
	for rows.Next() {
		var p Product
		if err := rows.Scan(&p.ID, &p.Name, &p.Description, &p.Price, &p.ImageURL); err != nil {
			c.JSON(500, gin.H{"error": "Failed to scan product: " + err.Error()})
			return
		}
		products = append(products, p)
	}

	if err = rows.Err(); err != nil {
		c.JSON(500, gin.H{"error": "Error iterating products: " + err.Error()})
		return
	}
	c.JSON(200, products)
}
