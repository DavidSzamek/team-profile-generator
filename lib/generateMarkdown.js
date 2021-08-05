// Include required packages

const fs = require("fs");
const path = require("path");
const srcDir = path.resolve(__dirname, "../src");

// generateMarkdown function 

const generateHTML = employees => {
    const html = [];

    // Generate team via filtering through roles

    // Manager
    html.push(...employees
    .filter(employee => employee.getRole() === "Manager")
      .map(manager => generateManager(manager))
    );

    // Engineer
    html.push(...employees
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => generateEngineer(engineer))
    );

    // filtering interns
    html.push(...employees
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => generateIntern(intern))
    );
    
    return generateBody(html.join(""));

    };

// Generate Manager

const generateManager = manager => {
    let source = fs.readFileSync(path.resolve(srcDir, "manager.html"), "utf-8");
        source = replacePlaceholders(source, "name", manager.getName());
        source = replacePlaceholders(source, "role", manager.getRole());
        source = replacePlaceholders(source, "email", manager.getEmail());
        source = replacePlaceholders(source, "id", manager.getId());
        source = replacePlaceholders(source, "officeNumber", manager.getOfficeNumber());
            return source;
};

// Generate Engineer

const generateEngineer = engineer => {
    let source = fs.readFileSync(path.resolve(srcDir, "engineer.html"), "utf-8");
        source = replacePlaceholders(source, "name", engineer.getName());
        source = replacePlaceholders(source, "role", engineer.getRole());
        source = replacePlaceholders(source, "email", engineer.getEmail());
        source = replacePlaceholders(source, "id", engineer.getId());
        source = replacePlaceholders(source, "github", engineer.getGithub());
            return source;
};   

// Generate Intern

const generateIntern = intern => {
    let source = fs.readFileSync(path.resolve(srcDir, "intern.html"), "utf-8");
        source = replacePlaceholders(source, "name", intern.getName());
        source = replacePlaceholders(source, "role", intern.getRole());
        source = replacePlaceholders(source, "email", intern.getEmail());
        source = replacePlaceholders(source, "id", intern.getId());
        source = replacePlaceholders(source, "school", intern.getSchool());
            return source;
};   

const generateBody = html => {
    const source = fs.readFileSync(path.resolve(srcDir, "index.html"), "utf-8")

    return replacePlaceholders(source, "team", html);
}

const replacePlaceholders = (source, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return source.replace(pattern, value);
};

module.exports = generateHTML;