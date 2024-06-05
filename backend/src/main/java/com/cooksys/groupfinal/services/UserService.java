package com.cooksys.groupfinal.services;

import java.util.List;
import java.util.Set;

import com.cooksys.groupfinal.dtos.*;

public interface UserService {

	FullUserDto login(CredentialsDto credentialsDto);

	List<BasicUserDto> getAllUsers();

	FullUserDto createUser(UserRequestDto userRequestDto, Long adminId);

	Set<ProjectDto> getProjectsByUserId(Long userId);

	FullUserDto findUserById(Long userId);
}
