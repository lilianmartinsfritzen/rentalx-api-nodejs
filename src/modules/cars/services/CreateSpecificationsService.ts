import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string
  description: string
}
class CreateSpecificationsService {
  constructor(private specificationRepository: ISpecificationsRepository) { }

  execute({ name, description }: IRequest): void {
    this.specificationRepository.create({
      name,
      description
    })
  }
}

export { CreateSpecificationsService }
