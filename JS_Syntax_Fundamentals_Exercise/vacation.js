function calculatePrice(groupSize, groupType, dayOfWeek) {
    let pricePerPerson;

    // Determine the price per person based on the group type and day of the week
    if (groupType === "Students") {
        if (dayOfWeek === "Friday") {
            pricePerPerson = 8.45;
        } else if (dayOfWeek === "Saturday") {
            pricePerPerson = 9.80;
        } else if (dayOfWeek === "Sunday") {
            pricePerPerson = 10.46;
        }
    } else if (groupType === "Business") {
        if (dayOfWeek === "Friday") {
            pricePerPerson = 10.90;
        } else if (dayOfWeek === "Saturday") {
            pricePerPerson = 15.60;
        } else if (dayOfWeek === "Sunday") {
            pricePerPerson = 16;
        }
    } else if (groupType === "Regular") {
        if (dayOfWeek === "Friday") {
            pricePerPerson = 15;
        } else if (dayOfWeek === "Saturday") {
            pricePerPerson = 20;
        } else if (dayOfWeek === "Sunday") {
            pricePerPerson = 22.50;
        }
    }

    let totalPrice = pricePerPerson * groupSize; // Calculate the total price before discounts

    // Apply discounts in order if applicable
    if (groupType === "Students" && groupSize >= 30) {
        totalPrice *= 0.85; // 15% discount for groups of 30 or more students
    } else if (groupType === "Business" && groupSize >= 100) {
        totalPrice -= (pricePerPerson * 10); // 10 people stay for free for groups of 100 or more business people
    } else if (groupType === "Regular" && groupSize >= 10 && groupSize <= 20) {
        totalPrice *= 0.95; // 5% discount for groups of 10-20 regular people
    }

    return `Total price: ${totalPrice.toFixed(2)}`; // Return formatted price as a string
}

console.log(calculatePrice(40,
    "Regular",
    "Saturday"))