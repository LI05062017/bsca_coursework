function Destination (name, activities, img){ 
    this.name = name
    this.activities = activities
    this.img = img
}

const travel = []

//console.log(travel)

const rivieraMaya = new Destination("Riviera Maya", ["Go Snorkeling, Ziplining,  or Swimming"],"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFYVNTgsSNdYKk3fBnELiSPmpnHrBm8CoXkt9GzoB6ZzDfdXh")
const venice = new Destination("Venice",["Take a Gondola Ride, See the Rialto Bridge , and the Grand Canal"], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrig7wjfBrgL8b2YInPxuzy3m8l8BuUzl6VITMEUjEJrU3OP3ICA")
const bali = new Destination ("Bali",["Lay on the Beach , go Snorkeling, do Yoga, or go Surfing"], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxw4asv1oXh4k4EHJhJt0iy-u_2gerBnHYPx_y6dbPYHdNKdHCPQ")
const saintLucia = new Destination("Saint Lucia",["Go Scuba Diving, Sailing, or enjoy the Nightlife"],"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF9MV_NB7T_g_Tky1_jvQruQhlNw6VC8cLVZBkL107G2N8DvJC")
const savusavu = new Destination("Savusavu", ["Go to the Market, Fly Over the Mamanucas, Watch the sunset, Swimming"],"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8BcrLtjUPFEpHecVlYVHnzx9HR1mQsYG-BjirkQZxz9JNfLcCoA")


travel.push(rivieraMaya, venice, bali, saintLucia, savusavu)

//console.log(travel)

const destinationVue = {
    el: "#destination-app",
    data: {
        title: "Travel Destinations",
        travel: travel,
        newDestinationName: "",
        newDestinationActivities: "",
        newDestinationImg: "",
    },
    methods :{
        submitDestination: function (){
            const place = this.newDestinationName
            const activities = this.newdDestinationactivities
            const image = this.newDestinationImg
            const destination = new Destination(name, activities, img)

            this.travel.push(destination)

            this.newDestinationName
            this.newDestinationActivities
            this.newDestinationImg

        }
    },
}

new Vue(destinationVue)