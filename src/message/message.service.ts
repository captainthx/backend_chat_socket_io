import { Message } from './entities/message.entity';
import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
  message: Message[] = [{ name: 'captain', text: 'hi' }];
  clientToUser = {};
  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;

    return Object.values(this.clientToUser);
  }

  create(createMessageDto: CreateMessageDto, clientId: string) {
    const message = {
      name: this.clientToUser[clientId],
      text: createMessageDto.text,
    };
    this.message.push(message);

    return message;
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }

  findAll() {
    return this.message;
  }
}
