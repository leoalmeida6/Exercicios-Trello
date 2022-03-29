package com.example.exercicio5.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.exercicio5.model.Cliente;
import com.example.exercicio5.repository.ClienteRepository;

@Service
public class ClienteService {
	
	ClienteRepository clienteRepository;
	
	public ClienteService(ClienteRepository clienteRepository) {
		this.clienteRepository = clienteRepository;
	}
	
	 public Cliente findById(Long id) {
	        Optional<Cliente> cliente = clienteRepository.findById(id);
	        return cliente.get();
	    }

	    public List<Cliente> findAll() {

	        return clienteRepository.findAll();
	    }

	    public Cliente save(Cliente cliente) {

	        return clienteRepository.save(cliente);
	    }

	    public Cliente update(Long id, Cliente cliente) {
			findById(cliente.getId());
			return clienteRepository.save(cliente);
	    }

	    public void delete(Long id) {

	    	clienteRepository.deleteById(id);
	    }

}
