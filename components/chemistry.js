const chemistry = Vue.component('chemistry',{
    data : function(){
        return{
            topics : [
                {
                    id: 'c1',
                    name: "Mole Concept"
                },
                {
                    id: 'c2',
                    name: "Atomic Structure"
                },
                {
                    id: 'c3',
                    name: "Chemical Bonding"
                },
                {
                    id : 'c4',
                    name : "Periodic Table"
                },
                {
                    id : 'c5',
                    name : "Gaseous State"
                },
                {
                    id : 'c6',
                    name : "Thermodynamics"
                },
                {
                    id : 'c7',
                    name : "Thermochemistry"
                },
                {
                    id : 'c8',
                    name : "Chemical Equilibrium"
                },
                {
                    id : 'c9',
                    name : "Ionic Equilibrium"
                },
                {
                    id : 'c10',
                    name : "S block and hydrogen"
                },
                {
                    id : 'c11',
                    name : "P block - Group 13"
                },
                {
                    id : 'c12',
                    name : "P block - Group 14"
                },
                {
                    id : 'c13',
                    name : "Redox Reaction"
                },
                {
                    id : 'c14',
                    name : "Salt Analysis"
                },
                {
                    id : 'c15',
                    name : "Environmental Chemistry"
                },
                {
                    id : 'c16',
                    name : "GOC"
                },
                {
                    id : 'c17',
                    name : "Isomerism"
                },
                {
                    id : 'c18',
                    name : "Hydrocarbons"
                },
                {
                    id : 'c19',
                    name : "Solid State"
                },
                {
                    id : 'c20',
                    name : "Solutions"
                },
                {
                    id : 'c21',
                    name : "Chemical Kinetics"
                },
                {
                    id : 'c22',
                    name : "Electrochemistry"
                },
                {
                    id : 'c23',
                    name : "Surface Chemistry"
                },
                {
                    id : 'c24',
                    name : "Metallurgy"
                },
                {
                    id : 'c25',
                    name : "P block - Group 15"
                },
                {
                    id : 'c26',
                    name : "P block - Group 16"
                },
                {
                    id : 'c27',
                    name : "P block - Group 17"
                },
                {
                    id : 'c28',
                    name : "P block - Group 18"
                },
                {
                    id : 'c29',
                    name : "d and f block"
                },
                {
                    id : 'c30',
                    name : "Coordination Compounds"
                },
                {
                    id : 'c31',
                    name : "Haloalkanes"
                },
                {
                    id : 'c32',
                    name : "Alcohols and Ethers"
                },
                {
                    id : 'c33',
                    name : "Aldehydes and Ketones"
                },
                {
                    id : 'c34',
                    name : "Carboxylic Acids"
                },
                {
                    id : 'c35',
                    name : "Compounds containing Nitrogen"
                },
                {
                    id : 'c36',
                    name : "Aromatic Compounds"
                },
                {
                    id : 'c37',
                    name : "Polymers"
                },
                {
                    id : 'c38',
                    name : "Biomolecules"
                },
                {
                    id : 'c39',
                    name : "Chemistry in Everyday Life"
                },
                {
                    id : 'c40',
                    name : "Purification of Organic Compounds"
                }
            ],
            percent : 0,
            total : 240 // 40*6

        }

    },
    template : 
    `
    <div>
    <heading title="Chemistry" v-bind:percentage_completed="percent" ></heading>
    <topic subject="Chemistry" v-for="chapter in topics" v-bind:key="chapter.id" v-bind:title="chapter.name" v-bind:reference="chapter.id" v-on:update-count="setPercentage"></topic>
    </div>
    `,

    mounted(){
        fetchedObj = JSON.parse(localStorage.getItem("Chemistry"));
        count=0;
        if(fetchedObj){
            this.setPercentage();
        }
        else{
            obj = this.generateList();
            localStorage.setItem('Chemistry',JSON.stringify(obj));
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
            for(i=1;i<41;i++){
                key = "c"+i;
                console.log(key)
                reqObj[key]=obj;
            }
            return reqObj
        },

        setPercentage : function(){
            fetchedObj = JSON.parse(localStorage.getItem("Chemistry"));
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

