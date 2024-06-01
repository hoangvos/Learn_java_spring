package com.hoang.ProductSpringWeb.service;

import com.hoang.ProductSpringWeb.model.Product;
import com.hoang.ProductSpringWeb.repository.ProductDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class ProductService {
    @Autowired
    ProductDB db;
    public void addProduct(Product p){
        db.save(p);
    }
    public List<Product> getAllProducts(){
        return db.findAll();
    }
    public Product getProduct(String name) {
        return db.findByName(name);
    }
    public void updateProduct(int id, Product p) {
        Optional<Product> optionalProduct = db.findById(id);
        if (optionalProduct.isPresent()) {
            Product existingProduct = optionalProduct.get();
            existingProduct.setName(p.getName());
            existingProduct.setType(p.getType());
            existingProduct.setPlace(p.getPlace());
            existingProduct.setWarranty(p.getWarranty());
            // update other fields as necessary
            db.save(existingProduct);
        }
    }
    public void deleteProduct(int id) {
        db.deleteById(id);
    }


    public Product getProductById(int id) {
        Optional<Product> optionalProduct = db.findById(id);
        if (optionalProduct.isPresent()) {
            return optionalProduct.get();
        }
        return null;
    }
}
