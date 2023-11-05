interface Result {
    periodLenght: number,
    trainingDay: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const parseArguments = (args: string[]) => {
    if (args.length > 10) throw new Error('Too many arguments');
    if (args.length < 10) throw new Error('Not enough arguments');
    if(!isNaN(Number(args[2])) && process.argv.slice(3).every((arg) => !isNaN(Number(arg)))) {
        return {
            target: Number(args[2]),
            dailyHours: process.argv.slice(3).map(Number)
        };
    } else {
        throw new Error('Provided values were not numbers!');
    }
};

export const calculateExercises = (target: number, dailyHours: number[]): Result => {
    const result = {
        periodLenght: dailyHours.length,
        trainingDay: 0,
        success: false,
        rating: 0,
        ratingDescription: "",
        target: target,
        average: 0
    };

    let total = 0;

    for(let i = 0; i < dailyHours.length; i++) {
        total += dailyHours[i];
        if(dailyHours[i] > 0) {
            result['trainingDay'] += 1;
        }
    }

    result['average'] = total / dailyHours.length;
    const workoutPercentage = (result['average'] / target) * 100;

    if(result['average'] >= target) {
        result['success'] = true;
        result['rating'] = 3;
        result['ratingDescription'] = 'Training completed';
    } else if(workoutPercentage >= 60 && workoutPercentage <= 99) {
        result['rating'] = 2;
        result['ratingDescription'] = 'Not too bad but could be better';
    } else {
        result['rating'] = 1;
        result['ratingDescription'] = 'Not even close. Could be much better';
    }

    
    return result;
};


try {
    const { target, dailyHours } = parseArguments(process.argv);
    console.log(calculateExercises(target, dailyHours));
} catch(error: unknown) {
    let errorMessage = 'Something bad happend';
    if(error instanceof Error) {
        errorMessage += error.message;
    }
    console.log(errorMessage);
}