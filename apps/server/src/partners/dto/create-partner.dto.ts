import { ApiProperty } from "@nestjs/swagger";

export class CreatePartnerDto {
    @ApiProperty()
    name: string;
}
