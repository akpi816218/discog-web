import { RESTPostAPIChatInputApplicationCommandsJSONBody } from 'discord-api-types/v10';
import { SerializedCommandHelpEntry } from './CommandHelpEntry';

export interface Command {
	data: RESTPostAPIChatInputApplicationCommandsJSONBody;
	help?: SerializedCommandHelpEntry;
}
