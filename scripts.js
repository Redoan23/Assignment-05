const seats = document.getElementsByClassName('seats');
let count = 0;
let remaining = 40;
let seatArray = []

for (const seat of seats) {

    seat.addEventListener('click', function () {



        let id = seat.innerText
        document.getElementById(id).classList.toggle('bg-gray-50')
        document.getElementById(id).classList.toggle('bg-[#1DD100]')

        if (!seatArray.includes(id) && seatArray.length < 4) {



            if(seat.classList.contains('bg-[#1DD100]')){
               
                seatArray.push(seat);
            }
            if(seat.classList.contains('bg-[#1DD100]')==false){
                seatArray.pop()
            }
            console.log(seatArray)

            

            count = seatArray.length
            remaining = remaining - seatArray.length;

            let totalSeats = document.getElementById('total-seats');
            totalSeats.innerText = remaining;

            let selectedSeats = document.getElementById('selected-seats')
            selectedSeats.innerText = count
        }
    })
}