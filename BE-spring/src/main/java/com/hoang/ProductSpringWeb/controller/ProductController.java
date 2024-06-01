package com.hoang.ProductSpringWeb.controller;

import com.hoang.ProductSpringWeb.model.Product;
import com.hoang.ProductSpringWeb.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {
    @Autowired
    ProductService service;
    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return service.getAllProducts();
    }
    @GetMapping("/products/{name}")
    public Product getProduct(@PathVariable String name){
        return service.getProduct(name);
    }
    @GetMapping("/product/{id}")
    public Product getProduct(@PathVariable int id) {
        return service.getProductById(id);
    }

    @PostMapping("/product")
    public void addProduct(@RequestBody Product p){
        service.addProduct(p);
    }
    @PutMapping("/product/{id}")
    public void updateProduct(@PathVariable int id, @RequestBody Product p) {
        service.updateProduct(id, p);
    }
    @DeleteMapping("/product/{id}")
    public void deleteProduct(@PathVariable int id) {
        service.deleteProduct(id);
    }

}
