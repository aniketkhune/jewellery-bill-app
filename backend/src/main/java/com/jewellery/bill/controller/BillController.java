package com.jewellery.bill.controller;

import com.jewellery.bill.model.BillRequest;
import com.jewellery.bill.model.BillResponse;
import com.jewellery.bill.service.BillService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class BillController {

    private final BillService billService;

    public BillController(BillService billService) {
        this.billService = billService;
    }

    @PostMapping("/calculate")
    public ResponseEntity<BillResponse> calculateBill(@RequestBody BillRequest request) {
        BillResponse response = billService.calculateBill(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Jewellery Bill Calculator is running!");
    }
}
