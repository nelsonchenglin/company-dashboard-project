package com.cooksys.groupfinal.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.cooksys.groupfinal.dtos.*;
import com.cooksys.groupfinal.entities.Project;
import org.springframework.web.bind.annotation.*;

import com.cooksys.groupfinal.services.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

	private final UserService userService;

	@PostMapping("/login")
	@CrossOrigin(origins = "*")
	public FullUserDto login(@RequestBody CredentialsDto credentialsDto) {
		return userService.login(credentialsDto);
	}

	@GetMapping()
	public List<BasicUserDto> allUsers() {
		return userService.getAllUsers();
	}

	@PostMapping()
	public FullUserDto createUser(@RequestBody UserRequestDto userRequestDto, @RequestHeader("admin-id") Long adminId) {
		return userService.createUser(userRequestDto, adminId);
	}

	@GetMapping("/{userId}/projects")
	public Set<ProjectDto> getProjectsByUserId (@PathVariable Long userId){
		return userService.getProjectsByUserId(userId);
	}

	@GetMapping("/{userId}")
	public FullUserDto findUserById(@PathVariable Long userId){
		return userService.findUserById(userId);
	}

}
