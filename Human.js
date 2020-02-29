class Human {
name;
job;
skills;
constructor(){
    this.name="";
    this.job="";
    this.skills=[]
}

}
class Student extends Human{
    constructor(){
        this.super();
     
         console.log(this.job)
        }
        getJob(job){
            this.job =job
        }
        leaveJob(){

            this.job = "unemployed"
            console.log(this.job)
        }
        learnNewSkill(skill){
            this.skills.push(skill)
            console.log(this.skills)

        }
        forgetSkill(a){
            this.skills=this.skills.filter((skill)=>{ skill != a})
            console.log(this.skills)

        };
        
    }

    



const me = new Student();

me.getJob("Web developer");

me.learnNewSkill("React");

me.forgetSkill("React");

me.leaveJob();