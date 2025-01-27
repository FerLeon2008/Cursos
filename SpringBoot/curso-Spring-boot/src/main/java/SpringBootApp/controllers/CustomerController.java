package SpringBootApp.controllers;

import SpringBootApp.domain.Customer;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/userData")
public class CustomerController {

    private List<Customer> customers = new ArrayList<>(Arrays.asList(
        new Customer(123, "Fernando León", "TheLord", "PASSWORD"),
        new Customer( 60065,"Giovanni Ramírez", "Putita23", "SoyGAY"),
        new Customer( 1304,"Erick Romero", "ErickByJazmine", "JazmineLover2025"),
        new Customer( 1403, "María Rodríguez", "PrideLesbian2025", "OnlyLesbians")
    ));

    @RequestMapping(method = RequestMethod.GET)
    // @GetMapping
    public List<Customer> getCustomers(){
        return customers;
        
    }

    @RequestMapping(value = "/{userName}", method = RequestMethod.GET)
    // @GetMapping("/{userName}")
    public Customer getUser(@PathVariable String userName){
        for (Customer u : customers){
            if(u.getUserName().equalsIgnoreCase(userName)){
                return u;
            }
        }
        return null;
    }

    @RequestMapping(method = RequestMethod.POST)
    // @PostMapping
    public Customer postClient(@RequestBody Customer newCustomer){
        customers.add(newCustomer);
        return newCustomer;
    }

    @RequestMapping(method = RequestMethod.PUT)
    // @PutMapping
    public Customer putClient(@RequestBody Customer customer){
        for (Customer c : customers){
            if (c.getID() == customer.getID()){
                c.setName(customer.getName());
                c.setUserName(customer.getUserName());
                c.setPassword(customer.getPassword());

                return c;
            }
        }
        return null;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    // @DeleteMapping("/{id}")
    public Customer deleteClient(@PathVariable int id){
        for (Customer c: customers){
            if (c.getID() == id){
                customers.remove(c);
                return c;
            }
        }
        return null;
    }

    @RequestMapping(method = RequestMethod.PATCH)
    // @PatchMapping
    public Customer patchClient(@RequestBody Customer customer) {
        for (Customer c : customers) {
            if (c.getID() == customer.getID()) {
                if (customer.getName() != null) {
                    c.setName(customer.getName());
                }
                if (customer.getUserName() != null) {
                    c.setUserName(customer.getUserName());
                }
                if (customer.getPassword() != null) {
                    c.setPassword(customer.getPassword());
                }
                return c;
            }
        }
        return null;
    }
}
