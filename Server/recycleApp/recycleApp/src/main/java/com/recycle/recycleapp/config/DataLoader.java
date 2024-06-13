package com.recycle.recycleapp.config;

import com.recycle.recycleapp.role.Role;
import com.recycle.recycleapp.role.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
        List<String> roleNames = Arrays.asList("ROLE_RECYCLER", "ROLE_ADMIN", "ROLE_RECEIVER", "ROLE_ORGANIZATION_MANAGER");

        roleNames.forEach(roleName -> {
            if (!roleRepository.existsByName(roleName)) {
                Role role = Role.builder()
                        .name(roleName)
                        .createdDate(LocalDateTime.now())
                        .lastModifiedDate(LocalDateTime.now())
                        .build();
                roleRepository.save(role);
            }
        });
    }
}

