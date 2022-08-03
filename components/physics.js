const physics = Vue.component('physics',{
    data : function(){
        return{
            topics : [
                {
                    id: 'p1',
                    name: "Units and Dimensions"
                },
                {
                    id: 'p2',
                    name: "Vectors"
                },
                {
                    id: 'p3',
                    name: "1D Kinematics"
                },
                {
                    id : 'p4',
                    name : "2D Kinematics"
                },
                {
                    id : 'p5',
                    name : "Laws of Motion"
                },
                {
                    id : 'p6',
                    name : "Work Power Energy"
                },
                {
                    id : 'p7',
                    name : "Friction"
                },
                {
                    id : 'p8',
                    name : "Circular Motion"
                },
                {
                    id : 'p9',
                    name : "Center of Mass and Momentum"
                },
                {
                    id : 'p10',
                    name : "Rotational Motion"
                },
                {
                    id : 'p11',
                    name : "Gravitation"
                },
                {
                    id : 'p12',
                    name : "Properties of Matter"
                },
                {
                    id : 'p13',
                    name : "Fluid Mechanics"
                },
                {
                    id : 'p14',
                    name : "Kinetic Theory of Gases"
                },
                {
                    id : 'p15',
                    name : "Thermodynamics"
                },
                {
                    id : 'p16',
                    name : "Thermal Properties of matter"
                },
                {
                    id : 'p17',
                    name : "calorimetry"
                },
                {
                    id : 'p18',
                    name : "Heat Transfer"
                },
                {
                    id : 'p19',
                    name : "Oscillation"
                },
                {
                    id : 'p20',
                    name : "String Waves"
                },
                {
                    id : 'p21',
                    name : "Sound Waves"
                },
                {
                    id : 'p22',
                    name : "Experimental Physics"
                },
                {
                    id : 'p23',
                    name : "Electrostatics"
                },
                {
                    id : 'p24',
                    name : "Capacitor"
                },
                {
                    id : 'p25',
                    name : "Current Electricity"
                },
                {
                    id : 'p26',
                    name : "Magnetic Effect of Current"
                },
                {
                    id : 'p27',
                    name : "Magnetism"
                },
                {
                    id : 'p28',
                    name : "Electromagnetic Induction"
                },
                {
                    id : 'p29',
                    name : "Alternating Current"
                },
                {
                    id : 'p30',
                    name : "Electromagnetic Waves"
                },
                {
                    id : 'p31',
                    name : "Ray Optics"
                },
                {
                    id : 'p32',
                    name : "Wave Optics"
                },
                {
                    id : 'p33',
                    name : "Photoelectric Effect"
                },
                {
                    id : 'p34',
                    name : "Atomic Physics"
                },
                {
                    id : 'p35',
                    name : "Nuclear Physics"
                },
                {
                    id : 'p36',
                    name : "Semiconductors"
                },
                {
                    id : 'p37',
                    name : "Communication System"
                }
            ],
            percent : 0,
            total : 222 // 37*6

        }

    },
    template : 
    `
    <div>
    <heading title="Physics" v-bind:percentage_completed="percent" ></heading>
    <topic subject="Physics" v-for="chapter in topics" v-bind:key="chapter.id" v-bind:title="chapter.name" v-bind:reference="chapter.id" v-on:update-count="setPercentage"></topic>
    </div>
    `,

    mounted(){
        fetchedObj = JSON.parse(localStorage.getItem("Physics"));
        count=0;
        if(fetchedObj){
            this.setPercentage();
        }
        else{
            obj = this.generateList();
            localStorage.setItem('Physics',JSON.stringify(obj));
        }

        
    },
    methods : {
        generateList : function(){
            obj = {completion_status : false,
                sheet : false,
                pyq : false,
                revision1 : false,
                revision2 : false,
                formula_revision : false}
            reqObj = {}
            for(i=1;i<38;i++){
                key = "p"+i;
                console.log(key)
                reqObj[key]=obj;
            }
            return reqObj
        },

        setPercentage : function(){
            fetchedObj = JSON.parse(localStorage.getItem("Physics"));
            count=0;
            if(fetchedObj){
                for(eachObj in fetchedObj){
                    for(eachfield in fetchedObj[eachObj]){
                        if(fetchedObj[eachObj][eachfield]){
                            count++;
                        }
                    }
                }
            }
            percent = (count * 1.2)/(this.total * 1.2);
            this.percent=percent.toPrecision(2);
        }
    }
})

