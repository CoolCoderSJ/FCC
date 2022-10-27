class Category:
    def __init__(self, name):
        self.ledger = []
        self.balance = 0
        self.spent = 0
        self.name = name
    
    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})
        self.balance += amount
    
    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            self.ledger.append({"amount": amount*-1, "description": description})
            self.balance -= amount
            self.spent += amount
            return True
        else:
            return False
    
    def get_balance(self):
        return self.balance
    
    def transfer(self, amount, cat):
        if self.check_funds(amount):
            self.withdraw(amount, "Transfer to " + cat.name)
            cat.deposit(amount, "Transfer from " + self.name)
            return True
        else:
            return False
    
    def check_funds(self, amount):
        if self.balance >= amount:
            return True
        else:
            return False
    
    def __str__(self):
        result = self.name.center(30, "*") + "\n"
        for item in self.ledger:
            result += item["description"][:23].ljust(23) + format(item['amount'], '.2f')[:7].rjust(7) + "\n"
        result += "Total: " + str(self.balance)
        return result
    
def create_spend_chart(categories):
    output = "Percentage spent by category\n"
    total_spent = 0
    for cat in categories:
        total_spent += cat.spent

    for i in ['100', '90', '80', '70', '60', '50', '40', '30', '20', '10', '0']:
        output += str(i).rjust(3) + "| "
        for cat in categories:
            percent = cat.spent / total_spent * 100
            if percent - (percent%10) >= int(i):
                output += "o  "
            else:
                output += "   "
        output += "\n"
    output += "    " + "-" * (len(categories) * 3 + 1) + "\n"

    max_len = 0
    for cat in categories:
        if len(cat.name) > max_len:
            max_len = len(cat.name)
    
    for i in range(max_len):
        output += "     "
        for cat in categories:
            if len(cat.name) > i:
                output += cat.name[i] + "  "
            else:
                output += "   "
        if i < max_len - 1:
            output += "\n"

    return output