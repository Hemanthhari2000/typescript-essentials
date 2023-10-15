class Department {
    dept_name: string

    constructor(name: string) {
        this.dept_name = name
    }
    describe(this: Department) {
        console.log("Department of " + this.dept_name);

    }
}
const dept = new Department("Education");
console.log(dept);
dept.describe();

