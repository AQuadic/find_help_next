import React from 'react'

function CheckOut() {
  return (
    <>
    <div class="checkOut container">
<div class="part1">
    <h2>Check Out</h2>
    <form action="">
        <h3>Billing address</h3>
        <div class="part">
            <label for="exampleDataList" class="form-label">Country</label>
            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
           
            <datalist id="datalistOptions">
              <option value="San Francisco"/>
              <option value="New York"/>
              <option value="Seattle"/>
              <option value="Los Angeles"/>
              <option value="Chicago"/>
            </datalist>
        </div>
        <h3>Payment Method</h3>
        <div class="part">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                <label class="form-check-label" for="exampleRadios1">
                    Credit / Debit Card
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                <label class="form-check-label" for="exampleRadios2">
                    PayPal
                </label>
              </div>
            
        </div>
        <h3>Discount Code</h3>
        <div class="part apply">
            <input type="text" placeholder="Enter The Code
            "/>
            <input type="submit" class="btn_page2" value="Apply"/>
        </div>
    </form>
</div>
<div class="part2">
    <h3>Summary</h3>
    <h4>Product Management Fundamentals</h4>
    <ul>
        <li>
            <h5>Original Price:</h5>
            <p>E£719.99</p>
        </li>
        <li>
            <h5>Discount</h5>
            <p class="green">-E£540.00</p>
        </li>
        <li>
            <h5>Total</h5>
            <p >E£719.99</p>
        </li>
    </ul>
    <a href="signUp.html" class="btn_page">Check Out</a>
</div>
  </div>
    </>
  )
}

export default CheckOut