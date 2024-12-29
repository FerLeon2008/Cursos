package SpringBootApp.controllers;

import SpringBootApp.domain.Customer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class CustomerController {

    private List<Customer> customers = new ArrayList<>(Arrays.asList(
        new Customer(123, "Fernando León", "TheLord", "PASSWORD"),
        new Customer( 60065,"Giovanni Ramírez", "Putita23", "SoyGAY"),
        new Customer( 1304,"Erick Romero", "ErickByJazmine", "JazmineLover2025"),
        new Customer( 1403, "María Rodríguez", "PrideLesbian2025", "OnlyLesbians")
    ));

    @GetMapping("/userData")
    public List<Customer> getCustomers(){
        return customers;
    }

    @GetMapping("/userData/{userName}")
    public Customer getUser(@PathVariable String userName){
        for (Customer u : customers){
            if(u.getUserName().equalsIgnoreCase(userName)){
                return u;
            }
        }
        return null;
    }
}
