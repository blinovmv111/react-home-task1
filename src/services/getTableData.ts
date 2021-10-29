import React, {useMemo, useState, useEffect} from 'react';
import axios from 'axios';
import { IdataTable } from '../types/types';

const fetchTableData = async function(url: string) {
	try {
		const response = await axios.get<IdataTable[]> (url);
		return response.data;
	} catch (e) {
		console.log(e);
		return undefined;
	}
}

export default fetchTableData;


