package com.example.exercicio5.controller;

import java.util.List;
import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.exercicio5.model.Cliente;
import com.example.exercicio5.service.ClienteService;

@RestController
@RequestMapping("/cliente")
public class ClienteController {
	
	ClienteService clienteService;

	public ClienteController(ClienteService clienteService) {
		this.clienteService = clienteService;
	}
	
	@PostMapping
    public Cliente saveCliente(@RequestBody @Valid Cliente cliente) {
        return clienteService.save(cliente);
    }
	
	@GetMapping
    public ResponseEntity<List<Cliente>> findAllCliente() {
        return ResponseEntity.status(HttpStatus.OK).body(clienteService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findByIdCliente(@PathVariable Long id) {
    	Cliente cliente = clienteService.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(clienteService.findById(id));
    }

/*    @PutMapping(value = "/update/{id}")
    public ResponseEntity<Cliente> updateCliente(@PathVariable @Valid Long id, @RequestBody Cliente cliente) {

        Cliente result = clienteService.update(id, cliente);

        return ResponseEntity.ok().body(result);
    }*/

    @RequestMapping(value="/{id}", method= RequestMethod.PUT)
    public ResponseEntity<Cliente> updateCliente(@RequestBody Cliente cliente, @PathVariable @Valid Long id){
        cliente = clienteService.update(id, cliente);
        return ResponseEntity.ok().body(cliente);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteCliente(@PathVariable Long id){
    	clienteService.delete(id);
        return ResponseEntity.noContent().build();
    }


}
