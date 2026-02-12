// admin.js

document.addEventListener("DOMContentLoaded", () => {

    // Helper to populate table
    function populateTable(tableId, data, fields) {
        const tbody = document.getElementById(tableId).querySelector("tbody");
        tbody.innerHTML = "";
        data.forEach(item => {
            const tr = document.createElement("tr");
            fields.forEach(field => {
                const td = document.createElement("td");
                td.textContent = item[field] ?? ""; // Use ?? to handle null/undefined
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
    }

    // Fetch members
    async function loadMembers() {
        try {
            const response = await fetch("/api/members");
            const data = await response.json();
            populateTable("membersTable", data, ["id", "name", "email", "phone", "joinDate"]);
        } catch (error) {
            console.error("Error loading members:", error);
        }
    }

    // Fetch loans
    async function loadLoans() {
        try {
            const response = await fetch("/api/loans");
            const data = await response.json();
            populateTable("loansTable", data, ["id", "memberId", "amount", "status", "date"]);
        } catch (error) {
            console.error("Error loading loans:", error);
        }
    }

    // Fetch messages
    async function loadMessages() {
        try {
            const response = await fetch("/api/messages");
            const data = await response.json();
            populateTable("messagesTable", data, ["id", "name", "email", "message", "date"]);
        } catch (error) {
            console.error("Error loading messages:", error);
        }
    }

    // Initial load
    loadMembers();
    loadLoans();
    loadMessages();

});
