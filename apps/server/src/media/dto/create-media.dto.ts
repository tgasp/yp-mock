import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional } from 'class-validator';

export class CreateMediaDTO {
  @IsIn(['Image', 'Video'])
  @ApiProperty()
  type: string;

  @ApiProperty()
  @IsOptional()
  title?: string;

  @ApiProperty()
  @IsOptional()
  directory?: string = '';

  @ApiProperty()
  @IsOptional()
  description?: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  file?: any;
}
