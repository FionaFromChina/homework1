/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
	var p = A ;
	while (A.tail) {
		A = A.tail;
	}
	A.tail = B;
	return p;
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {

	// check
	if(!L) {
		return null;
	}
	start = start || 0;
	len = len || 0;

	// get begin pointer
	for( var i = 0 ; i < start && L.tail; i++) {
		L = L.tail;
		i ++;
	}
	if(i < start) {
		return null;
	}

	// get new list
	var cur = L,
		p = L;
	for(var j = 0 ; j <= len ; j++) {
		cur = cur.tail;
		j ++;
	}
	if(j <= len) {
		return null;
	}
	cur.tail = null;

	return p.tail;
}
