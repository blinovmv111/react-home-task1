import React, {useMemo, useState, useEffect} from 'react';
import axios from 'axios';

const fetchImage = async function (url: string) {
    try {
      const response = await axios.get(url);
      return response.data.message;
    } catch (err) {
      alert(err);	  
		return undefined;
    }
  }

export default fetchImage;