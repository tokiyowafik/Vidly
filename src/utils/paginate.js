export function paginate(allItems, pageSize, pageNumber) {
    let startIndex = (pageNumber - 1) * pageSize;
    let limit = pageNumber * pageSize;
    if (limit > allItems.length)
        limit = allItems.length

    return allItems.slice(startIndex, limit);
}