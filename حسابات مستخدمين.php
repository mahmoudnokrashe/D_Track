<?php

class Customer {
    public $id;
    public $fullName;
    public $phone;
    public $address;
    public $email;
    public $password;
    public $deliveryPreferences;
    public $paymentInfo;
}

class Merchant {
    public $id;
    public $companyName;
    public $activityType;
    public $address;
    public $phone;
    public $email;
    public $website;
    public $productsOrServices;
    public $prices;
    public $returnPolicy;
}

class DeliveryDriver {
    public $id;
    public $fullName;
    public $phone;
    public $birthdate;
    public $carInfo;
    public $contact;
    public $workingArea;
    public $availableWorkingHours;
    public $workHistoryAndRatings;
}

?>
