class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :username
      t.boolean :admin
      t.string :slug

      t.timestamps
    end
  end
end