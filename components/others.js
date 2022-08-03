
const topic = Vue.component("topic", {
    props: ['title', 'reference', 'subject'],
    data: function () {
        data = {
            completion_status: false,
            sheet: false,
            pyq: false,
            revision1: false,
            revision2: false,
            formula_revision: false,
        }

        return data

    },
    mounted() {
        fetchedObj = JSON.parse(localStorage.getItem(this.subject));
        if (fetchedObj) {
            obj = fetchedObj[this.reference];
            for (elem in obj) {
                if (elem === 'completion_status') {
                    this.completion_status = obj[elem]

                }
                else if (elem === 'sheet') {
                    this.sheet = obj[elem]

                }
                else if (elem === 'pyq') {
                    this.pyq = obj[elem]

                }
                else if (elem === 'revision1') {
                    this.revision1 = obj[elem]

                }
                else if (elem === 'revision2') {
                    this.revision2 = obj[elem]

                }
                else if (elem === 'formula_revision') {
                    this.formula_revision = obj[elem]

                }
            }
        }
    },
    watch: {
        completion_status: function (val) {
            this.save('completion_status', val);
        },
        sheet: function (val) {
            this.save('sheet', val);
        },
        pyq: function (val) {
            this.save('pyq', val);
        },
        revision1: function (val) {
            this.save('revision1', val);
        },
        revision2: function (val) {
            this.save('revision2', val);
        },
        formula_revision: function (val) {
            this.save('formula_revision', val);
        }
    },
    methods: {
        save: function (prop, val) {
            fetchedObj = JSON.parse(localStorage.getItem(this.subject));
            fetchedObj[this.reference][prop] = val;
            localStorage.setItem(this.subject, JSON.stringify(fetchedObj));
            this.$emit("update-count");
        }
    },
    template:
        `
    <div class="component_topic_row">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-4">
                    <strong>{{ title }}</strong>
                </div>
                <div class="col">
                    <div class="row">
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" v-model="completion_status">
                                <label class="form-check-label" for="completion_status">
                                    Completed
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" v-model="sheet">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Practice Sheets
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" v-model="pyq">
                                <label class="form-check-label" for="flexCheckDefault">
                                    PYQs
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" v-model="revision1">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Revision 1
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" v-model="revision2">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Revision 2
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" v-model="formula_revision">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Formula Revision
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    `
})



const heading = Vue.component("heading", {
    props: ["title", "percentage_completed"],
    template:
        `
    <div class="component_heading">
        <div class="container">
            <div class="row">
                <div class="col-md-6 d-flex align-items-center justify-content-center" >
                    <div class="card text-center border-info" style="width: 25rem; height:15rem; background:#e3f2fd;">
                        <div class="card-body">
                            <h1 class="card-title display"><strong>Subject</strong></h1>
                            <br>
                            <p class="card-text display">{{ title }}</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 d-flex align-items-center justify-content-center">
                    <div class="card  border-info" style="width: 25rem; height:15rem; background:#e3f2fd;">
                        <div class="card-body">
                            <h1 class="card-title display"><strong>Percentage Completed</strong></h1>
                            <br>
                            <p class="card-text display">{{ percentage_completed }}%</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

    `
})