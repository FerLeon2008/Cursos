package SpringBootApp.controllers;

import SpringBootApp.domain.Customer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    // @RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public ResponseEntity<List<Customer>> getCustomers(){
        return ResponseEntity.ok(customers);
        
    }

    // @RequestMapping(value = "/{userName}", method = RequestMethod.GET)
    @GetMapping("/{userName}")
    public ResponseEntity<?> getUser(@PathVariable String userName){
        for (Customer u : customers){
            if(u.getUserName().equalsIgnoreCase(userName)){
                return ResponseEntity.ok(u);
            }
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario con Username: "+ userName + " No encontrado");
    }

    // @RequestMapping(method = RequestMethod.POST)
    @PostMapping
    public ResponseEntity<?> postClient(@RequestBody Customer newCustomer){
        customers.add(newCustomer);
        return ResponseEntity.status(HttpStatus.CREATED).body("Usuario: "+newCustomer.getName()+" creado correctamente");
    }

    // @RequestMapping(method = RequestMethod.PUT)
    @PutMapping
    public ResponseEntity<?> putClient(@RequestBody Customer customer){
        for (Customer c : customers){
            if (c.getID() == customer.getID()){
                c.setName(customer.getName());
                c.setUserName(customer.getUserName());
                c.setPassword(customer.getPassword());

                return ResponseEntity.noContent().build();
            }
        }
        return ResponseEntity.notFound().build();
    }

    // @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteClient(@PathVariable int id){
        for (Customer c: customers) {
            if (c.getID() == id) {
                customers.remove(c);
                return ResponseEntity.noContent().build();
            }
        }
        return ResponseEntity.notFound().build();
    }

    // @RequestMapping(method = RequestMethod.PATCH)
    @PatchMapping
    public ResponseEntity<?> patchClient(@RequestBody Customer customer) {
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
                return ResponseEntity.ok("Usuario con id: "+ c.getID() + " Modificado satisfactoriamente");
            }
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario con id: "+ customer.getID() + " No encontrado");
    }
}
