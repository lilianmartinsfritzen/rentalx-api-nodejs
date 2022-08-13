import { AppError } from '../../../../shared/errors/AppError'
import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory'
import { CreateCarUseCase } from './CreateCarUseCase'

let createCarUseCase: CreateCarUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe('Create Car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
  })

  it('should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Name Car Test',
      description: 'Description Car Test',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand Test',
      category_id: 'category_id_test'
    })
    expect(car).toHaveProperty('id')
  })

  it('should be able to create a new car with exists license plate', async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Car1 Test',
        description: 'Description Car Test',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'Brand Test',
        category_id: 'category_id_test'
      })

      await createCarUseCase.execute({
        name: 'Car2 Test',
        description: 'Description Car Test',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'Brand Test',
        category_id: 'category_id_test'
      })
    }).rejects.toBeInstanceOf(AppError)
  })
  
  it('should be able to create a new car with available true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car Available Test',
      description: 'Description Car Test',
      daily_rate: 100,
      license_plate: 'ZYW-9876',
      fine_amount: 60,
      brand: 'Brand Test',
      category_id: 'category_id_test'
    })
    expect(car.available).toBe(true)
  })
  
})
