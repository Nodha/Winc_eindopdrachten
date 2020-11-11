const get_yield_for_plant = (amount) => {
    return amount.yield;
}
const get_yield_for_crop = (crops) => {
    const yield_for_plant = get_yield_for_plant(crops.crop);
    const yield_for_crop = yield_for_plant * crops.num_crops;
    return yield_for_crop;
}
const get_total_yield = (cropInput) => {
    let total_yield = 0;
    cropInput.crops.forEach(crop => {
        total_yield += get_yield_for_crop(crop);
    });
    return total_yield;
}
const get_costs_for_plant = (plantCost) => {
    return plantCost.costs;
}
const get_costs_for_crop = (cropCost) => {
    const costs_plant = get_costs_for_plant(cropCost.crop);
    const costs_crop = costs_plant * cropCost.num_crops;
    return costs_crop;
}
const get_revenue_for_plant = (plant) => {
    return plant.sale_price * plant.yield;
}
const get_revenue_for_crop = (revenue) => {
    const revenue_for_plant = get_revenue_for_plant(revenue.crop);
    const revenue_for_crop = revenue_for_plant * revenue.num_crops;
    return revenue_for_crop;
}
const get_profit_for_plant = (profitPlant) => {
    return get_revenue_for_plant(profitPlant) - get_costs_for_plant(profitPlant);
}
const get_profit_for_crop = (cropProfit) => {
    const profit_for_plant = get_profit_for_plant(cropProfit.crop);
    const profit_for_crop = profit_for_plant * cropProfit.num_crops;
    return profit_for_crop;
}
const get_total_profit = (totalProfit) => {
    let total_profit = 0;
    totalProfit.crops.forEach(crop => {
        total_profit += get_profit_for_crop(crop);
    });
    return total_profit;
}
const get_yield_for_plant_with_factors = (plant, factors) => {
    const plantYieldNoFactors = plant.yield;
    const environmentFactorSun = factors.sun;
    const environmentFactorWind = factors.wind;
    const plantFactorSun = plant.factors.sun[environmentFactorSun];
    const plantFactorWind = plant.factors.wind[environmentFactorWind];
    let plantYieldWithSunFactor = 0;
    let plantYieldWithWindFactor = 0;
    if (plantFactorSun === 0) {
        plantYieldWithSunFactor = plantYieldNoFactors;
    }
    else if (Math.sign(plantFactorSun) === 1) {
        plantYieldWithSunFactor = ((plantFactorSun / 100) * plantYieldNoFactors) + plantYieldNoFactors;
    }
    else {
        plantYieldWithSunFactor = (plantYieldNoFactors * (plantFactorSun / 100)) + plantYieldNoFactors;
    }
    if (plantFactorWind === 0) {
        plantYieldWithWindFactor = plantYieldWithSunFactor;
        return plantYieldWithWindFactor;
    }
    else if (Math.sign(plantFactorWind) === 1) {
        plantYieldWithWindFactor = ((plantFactorWind / 100) * plantYieldWithSunFactor) + plantYieldWithSunFactor;
        return plantYieldWithWindFactor;
    }
    else {
        plantYieldWithWindFactor = (plantYieldWithSunFactor * (plantFactorWind / 100)) + plantYieldWithSunFactor;
        return plantYieldWithWindFactor;
    }
    
}
const get_yield_for_crop_with_factors = (amountWithFactors, factors) => {
    const yield_for_plant_with_factors = get_yield_for_plant_with_factors(amountWithFactors.crop, factors);
    const yield_for_crop_with_factors = yield_for_plant_with_factors * amountWithFactors.num_crops;
    return yield_for_crop_with_factors;
}
const get_revenue_for_plant_with_factors = (plant, factors) => {
    return plant.sale_price * get_yield_for_plant_with_factors(plant, factors);
}
const get_revenue_for_crop_with_factors = (crop, factors) => {
    const revenue_for_plant_with_factors = get_revenue_for_plant_with_factors(crop.crop, factors);
    const revenue_for_crop_with_factors = revenue_for_plant_with_factors * crop.num_crops;
    return revenue_for_crop_with_factors;
}
const get_profit_for_plant_with_factors = (plant, factors) => {
    return get_revenue_for_plant_with_factors(plant, factors) - get_costs_for_plant(plant);
}
const get_profit_for_crop_with_factors = (cropProfit, factors) => {
    const profit_for_plant_with_factors = get_profit_for_plant_with_factors(cropProfit.crop, factors);
    const profit_for_crop_with_factors = profit_for_plant_with_factors * cropProfit.num_crops;
    return profit_for_crop_with_factors;
}
const get_total_profit_with_factors = (cropsvalue, factors) => {
    let total_profit_with_factors = 0;
    cropsvalue.crops.forEach(cropsvalue => {
        total_profit_with_factors += get_profit_for_crop_with_factors(cropsvalue, factors);
    });
    return total_profit_with_factors;
}

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_plant,
    get_costs_for_crop,
    get_revenue_for_plant,
    get_revenue_for_crop,
    get_profit_for_plant,
    get_profit_for_crop,
    get_total_profit,
    get_yield_for_plant_with_factors,
    get_yield_for_crop_with_factors,
    get_revenue_for_plant_with_factors,
    get_revenue_for_crop_with_factors,
    get_profit_for_plant_with_factors,
    get_profit_for_crop_with_factors,
    get_total_profit_with_factors
};