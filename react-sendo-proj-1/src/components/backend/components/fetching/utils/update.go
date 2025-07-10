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

func HandleUpdateProducts(c *gin.Context, db *sql.DB, productId int) {
	var newProduct Product
	if err := c.ShouldBindJSON(&newProduct);  err != nil {
		c.JSON(400, gin.H{"error": "Invalid request data: " + err.Error()})
		return
	}


	updateStmt := `update product set name = $1, descrip = $2 , price = $3, image = $4 where id = $5`
	// Query to get all products
	results, err := db.Exec(updateStmt, newProduct.Name, newProduct.Description, newProduct.Price, newProduct.ImageURL, productId)
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to update products: " + err.Error()})
		return
	}
	c.JSON(200, gin.H{"error": results})
}
