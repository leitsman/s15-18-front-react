package com.recycle.recycleapp.dtos;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {




       //private String RecyclerCenterName;



        private String addressName;
        private String postalCode;
        private String latitude;
        private String longitude;
        private String city;
        private String country;
        private String phone;

}
