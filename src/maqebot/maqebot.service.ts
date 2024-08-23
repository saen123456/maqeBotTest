import { Injectable } from '@nestjs/common';

const direction = ['North', 'East', 'South', 'West'];

@Injectable()
export class MaqebotService {
  async getDirectionMaqeBot(command: string) {
    try {
      let x = 0;
      let y = 0;
      let transFormCommand = await this.transFormCommand(command);
      let nowDirection = direction[0];
      let index = 0;
      transFormCommand.map((char) => {
        switch (char.action) {
          case 'R':
            index = index + 1;
            index = index < 4 ? index : 0;
            nowDirection = direction[index];
            break;
          case 'L':
            index = index - 1;
            index = index >= 0 ? index : 3;
            nowDirection = direction[index];
            break;
          case 'W':
            if (index === 0) {
              y += char.value;
            } else if (index === 1) {
              x += char.value;
            } else if (index === 2) {
              y -= char.value;
            } else if (index === 3) {
              x -= char.value;
            }
            break;
        }
      });
      return {
        x: x,
        y: y,
        direction: nowDirection,
      };
    } catch (error) {
      console.error(error);
      return {
        x: 0,
        y: 0,
        direction: null,
      };
    }
  }

  async transFormCommand(
    command: string,
  ): Promise<{ action: string; value: number }[]> {
    const parsedCommands: { action: string; value: number }[] = [];
    const regex = /([RLW])(\d*)/g; //match RLW
    let match;

    while ((match = regex.exec(command)) !== null) {
      const action = match[1];
      const value = action === 'W' ? parseInt(match[2], 10) : 0;
      parsedCommands.push({ action, value });
    }

    return parsedCommands;
  }
}
