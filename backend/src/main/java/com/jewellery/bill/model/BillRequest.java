package com.jewellery.bill.model;

public class BillRequest {
    private double rate24Carat;
    private double purity;
    private double weight;
    private double makingCharges;

    public double getRate24Carat() { return rate24Carat; }
    public void setRate24Carat(double rate24Carat) { this.rate24Carat = rate24Carat; }

    public double getPurity() { return purity; }
    public void setPurity(double purity) { this.purity = purity; }

    public double getWeight() { return weight; }
    public void setWeight(double weight) { this.weight = weight; }

    public double getMakingCharges() { return makingCharges; }
    public void setMakingCharges(double makingCharges) { this.makingCharges = makingCharges; }
}
