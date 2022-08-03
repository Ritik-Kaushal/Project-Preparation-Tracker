const maths = Vue.component('maths',{
    data : function(){
        return{
            topics : [
                {
                    id: 'm1',
                    name: "Sets"
                },
                {
                    id: 'm2',
                    name: "Relation and Functions"
                },
                {
                    id: 'm3',
                    name: "Trigonometric Ratios"
                },
                {
                    id : 'm4',
                    name : "Trigonometric Equations"
                },
                {
                    id : 'm5',
                    name : "Solution of Triangles"
                },
                {
                    id : 'm6',
                    name : "Height and Distance"
                },
                {
                    id : 'm7',
                    name : "Quadratic Equations"
                },
                {
                    id : 'm8',
                    name : "Complex Numbers"
                },
                {
                    id : 'm9',
                    name : "Binomial Theorem"
                },
                {
                    id : 'm10',
                    name : "Sequences and Series"
                },
                {
                    id : 'm11',
                    name : "Permutation and Combination"
                },
                {
                    id : 'm12',
                    name : "Straight Lines"
                },
                {
                    id : 'm13',
                    name : "Circles"
                },
                {
                    id : 'm14',
                    name : "Parabola"
                },
                {
                    id : 'm15',
                    name : "Ellipse"
                },
                {
                    id : 'm16',
                    name : "Hyperbola"
                },
                {
                    id : 'm17',
                    name : "Statistics"
                },
                {
                    id : 'm18',
                    name : "Mathematical Reasoning"
                },
                {
                    id : 'm19',
                    name : "Inverse trigonometric Functions"
                },
                {
                    id : 'm20',
                    name : "Matrices and Determinants"
                },
                {
                    id : 'm21',
                    name : "Probability"
                },
                {
                    id : 'm22',
                    name : "Vectors"
                },
                {
                    id : 'm23',
                    name : "3D Geometry"
                },
                {
                    id : 'm24',
                    name : "Limits"
                },
                {
                    id : 'm25',
                    name : "Continuity and Differentiability"
                },
                {
                    id : 'm26',
                    name : "Differentiation"
                },
                {
                    id : 'm27',
                    name : "Application of Derivatives"
                },
                {
                    id : 'm28',
                    name : "Indefinite Integration"
                },
                {
                    id : 'm29',
                    name : "Definite Integration"
                },
                {
                    id : 'm30',
                    name : "Differential Equation"
                },
                {
                    id : 'm31',
                    name : "Area under the curve"
                }
            ],
            percent : 0,
            total : 186 // 31*6

        }

    },
    template : 
    `
    <div>
    <heading title="Maths" v-bind:percentage_completed="percent" ></heading>
    <topic subject="Maths" v-for="chapter in topics" v-bind:key="chapter.id" v-bind:title="chapter.name" v-bind:reference="chapter.id" v-on:update-count="setPercentage"></topic>
    </div>
    `,

    mounted(){
        fetchedObj = JSON.parse(localStorage.getItem("Maths"));
        count=0;
        if(fetchedObj){
            this.setPercentage();
        }
        else{
            obj = this.generateList();
            localStorage.setItem('Maths',JSON.stringify(obj));
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
            for(i=1;i<32;i++){
                key = "m"+i;
                console.log(key)
                reqObj[key]=obj;
            }
            return reqObj
        },

        setPercentage : function(){
            fetchedObj = JSON.parse(localStorage.getItem("Maths"));
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

