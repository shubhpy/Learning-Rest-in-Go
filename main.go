// Entrypoint for API
package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"rest-and-go/store"

	"github.com/gorilla/handlers"
)

func main() {
	// Get the "PORT" env variable
	port := os.Getenv("PORT")
	fmt.Println(port)

	if port == "" {
		port = "8080"
		// log.Fatal("$PORT must be set")
	}

	router := store.NewRouter() // create routes

	// These two lines are important if you're designing a front-end to utilise this API methods
	allowedOrigins := handlers.AllowedOrigins([]string{"*"})
	allowedMethods := handlers.AllowedMethods([]string{"GET", "POST", "DELETE", "PUT"})

	// Launch server with CORS validations
	log.Fatal(http.ListenAndServe(":"+port, handlers.CORS(allowedOrigins, allowedMethods)(router)))
}
