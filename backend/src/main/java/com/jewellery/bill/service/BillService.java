package com.jewellery.bill.service;

import com.jewellery.bill.model.BillRequest;
import com.jewellery.bill.model.BillResponse;
import org.springframework.stereotype.Service;

@Service
public class BillService {

    public BillResponse calculateBill(BillRequest request) {
        double ratePerGram = request.getRate24Carat() * (request.getPurity() / 100);
        double baseAmount = request.getWeight() * ratePerGram;
        double makingChargesAmount = baseAmount * (request.getMakingCharges() / 100);
        double totalBill = Math.round(baseAmount + makingChargesAmount);

        return new BillResponse(
            request.getWeight(),
            Math.round(ratePerGram * 100.0) / 100.0,
            Math.round(baseAmount * 100.0) / 100.0,
            Math.round(makingChargesAmount * 100.0) / 100.0,
            totalBill
        );
    }
}
