import axios from 'axios';
import config from '../config';

const { countApi } = config;

const hit = async (): Promise<IHitResponse> => await axios.get(`${countApi.baseUrl}hit/${countApi.namespace}/${countApi.key}`).then(d => d.data);

export default {
    hit
}

interface IHitResponse {
    value: number;
}