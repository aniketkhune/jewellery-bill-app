package com.jewellery.bill.model;

public class BillResponse {
    private double weight;
    private double ratePerGram;
    private double baseAmount;
    private double makingChargesAmount;
    private double totalBill;
    private String message;

    public BillResponse(double weight, double ratePerGram, double baseAmount,
                        double makingChargesAmount, double totalBill) {
        this.weight = weight;
        this.ratePerGram = ratePerGram;
        this.baseAmount = baseAmount;
        this.makingChargesAmount = makingChargesAmount;
        this.totalBill = totalBill;
        this.message = "Your total bill for " + weight + "g is ₹" + totalBill;
    }

    public double getWeight() { return weight; }
    public double getRatePerGram() { return ratePerGram; }
    public double getBaseAmount() { return baseAmount; }
    public double getMakingChargesAmount() { return makingChargesAmount; }
    public double getTotalBill() { return totalBill; }
    public String getMessage() { return message; }
}
