const seats = document.getElementsByClassName('seats');

let count = 0;
let remaining = 40;
let seatArray = [];
let sum = 0;

for (const seat of seats) {
    seat.addEventListener('click', function () {
        let id = seat.innerText

        // price amount functions based on conditions

        if (remaining > 36) {
            if (seat.classList.contains('bg-gray-100')) {
                document.getElementById(id).classList.remove('bg-gray-100')
                document.getElementById(id).classList.add('bg-[#1DD100]')

                seatArray.push(seat);
                remaining = remaining - 1;

                let p = document.createElement('p')
                p.innerText = document.getElementById(id).innerText
                let getId = document.getElementById('ticket-details')
                getId.appendChild(p)

                let p2 = document.createElement('p')
                p2.innerText = 'Economic'
                document.getElementById('static-class').appendChild(p2)

                let p3 = document.createElement('p')
                p3.innerText = '550'
                document.getElementById('fixed-price').appendChild(p3)

                const price = document.getElementById('main-price').innerText
                sum = sum + parseInt(price);
            }

            count = seatArray.length
            let totalSeats = document.getElementById('total-seats');
            totalSeats.innerText = remaining;
            let selectedSeats = document.getElementById('selected-seats')
            selectedSeats.innerText = count

            let totalPrice = document.getElementById('total-price')
            totalPrice.innerText = sum;

            const grandTotal = document.getElementById('grand-total-price')
            grandTotal.innerText = sum;




            // total price based on coupon apply conditions

            document.getElementById('apply-btn').addEventListener('click', function () {

                const btn = document.getElementById('apply-btn');
                const coupon = document.getElementById('coupon-field');
                let couponValue = coupon.value;
                const grandTotal = document.getElementById('grand-total-price');

                if (couponValue === 'NEW15') {
                    let off = sum - (sum * 15 / 100);
                    grandTotal.innerText = Math.round(off);
                    coupon.classList.add('hidden');
                    btn.classList.add('hidden');
                }

                else if (couponValue === 'Couple 20') {
                    let off = sum - (sum * 20 / 100);
                    grandTotal.innerText = Math.round(off);
                    coupon.classList.add('hidden');
                    btn.classList.add('hidden');
                }
            })




            // Next buttons disabled/enabled conditions

            let button = document.getElementById('next-btn')
            document.getElementById('phone-field').addEventListener('keyup', function (event) {
                if (event.target.value.length > 0 && event.target.value.length < 11) {
                    button.removeAttribute('disabled')
                }
                else { button.setAttribute('disabled', true) }
            })
        }

        else { alert('You cannot choose over 4 seats at a time.') }
    })
}

// Apply button disabled enabled functions

document.getElementById('coupon-field').addEventListener('keyup', function (e) {
    if (count === 4) {
        if (e.target.value === 'NEW15' || e.target.value === 'Couple 20') {

            document.getElementById('apply-btn').removeAttribute("disabled")
        }

        else {
            alert('invalid coupon')

            document.getElementById('apply-btn').setAttribute('disabled', true)
        }
    }

})


