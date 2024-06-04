package com.recycle.recycleapp.dtos;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {

        private Long addressId;
        private Long recycleCenterId;
        private Long personId;
        private String address;
        private String postalCode;
        private String latitude;
        private String longitude;
        private String city;
        private String country;
        private String phone;

}
