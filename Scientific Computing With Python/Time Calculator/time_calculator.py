import datetime

def add_time(start, dur, day=None):
    if not day:
        startTime = datetime.datetime.strptime(start, "%I:%M %p")
        duration = dur.split(":")
        result = startTime + datetime.timedelta(hours=int(duration[0]), minutes=int(duration[1]))
        dayDifference = result.day - startTime.day

        if dayDifference > 0:
            if dayDifference == 1:
                return result.strftime("%-I:%M %p (next day)")
            else:
                return result.strftime("%-I:%M %p (" + str(dayDifference) + " days later)")
        else:
            return result.strftime("%-I:%M %p")
    
    else:
        day = day.lower()
        days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
        startTime = datetime.datetime.strptime(start, "%I:%M %p")
        startTime += datetime.timedelta(days=days.index(day)-1)
        duration = dur.split(":")
        result = startTime + datetime.timedelta(hours=int(duration[0]), minutes=int(duration[1]))
        dayDifference = result.day - startTime.day

        if dayDifference > 0:
            if dayDifference == 1:
                return result.strftime("%-I:%M %p, %A (next day)")
            else:
                return result.strftime("%-I:%M %p, %A (" + str(dayDifference) + " days later)")
        else:
            return result.strftime("%-I:%M %p, %A")
