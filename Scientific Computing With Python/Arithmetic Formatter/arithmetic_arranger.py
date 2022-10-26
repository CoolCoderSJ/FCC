def arithmetic_arranger(problems, showSolution=False):
    if len(problems) > 5:
        return "Error: Too many problems."

    problemSplits = []
    
    for problem in problems:
        sign = None
        if "+" in problem: 
            sign = "+"
        elif "-" in problem:
            sign = "-"
        else:
            return "Error: Operator must be '+' or '-'."
        
        problemSplit = problem.split(sign)

        for i in problemSplit:
            problemSplit[problemSplit.index(i)] = i.strip()

        try:
            firstNum = int(problemSplit[0])
            secondNum = int(problemSplit[1])
        except:
            return "Error: Numbers must only contain digits."
        
        if len(problemSplit[0]) > 4 or len(problemSplit[1]) > 4:
            return "Error: Numbers cannot be more than four digits."

        if len(problemSplit[0]) > len(problemSplit[1]):
            length = len(problemSplit[0]) + 2
        else:
            length = len(problemSplit[1]) + 2

        problemSplits.append({
            "firstNum": firstNum,
            "secondNum": secondNum,
            "sign": sign,
            "length": length
        })

    firstLine = ""
    secondLine = ""
    thirdLine = ""
    if showSolution:
        fourthLine = "\n"
    else:
        fourthLine = ""

    i = 0
    for problem in problemSplits:
        firstLine += str(problem["firstNum"]).rjust(problem["length"])
        
        secondLine += problem["sign"] + str(problem["secondNum"]).rjust(problem["length"] - 1)

        thirdLine += ("-" * problem["length"])

        if showSolution:
            if problem["sign"] == "+":
                fourthLine += str(problem["firstNum"] + problem["secondNum"]).rjust(problem["length"])
            else:
                fourthLine += str(problem["firstNum"] - problem["secondNum"]).rjust(problem["length"])

        if i < len(problemSplits) - 1:
            firstLine += "    "
            secondLine += "    "
            thirdLine += "    "
            fourthLine += "    "

        i += 1

    result = firstLine + "\n" + secondLine + "\n" + thirdLine + fourthLine
    return result.rstrip()
