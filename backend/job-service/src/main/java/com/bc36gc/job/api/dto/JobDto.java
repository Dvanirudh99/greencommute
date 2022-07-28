package com.bc36gc.job.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class JobDto {
    private Integer id;
    private String role;
    private String address;
    private String history;
    private String skill;
    private String company;
    private String distance;


}
