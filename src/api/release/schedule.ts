import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IResponse, IScheduleResponse } from "../../types";


/**
 * Класс с эндпоинтами расписания
 */
export class Schedule {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET schedule
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IScheduleResponse}
     *
     * @example
     * const result = await client.endpoints.schedule.schedule(...);
     */
    public async schedule(options?: IBaseApiParams): Promise<IScheduleResponse> {
        return await this.client.call<number, IScheduleResponse>({ path: `/schedule`, ...options });
    }
}
